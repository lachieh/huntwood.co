import React, { useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import { ActionFunction, json } from 'remix'
import { getGuests } from '../utils/sheetsService'
import { rsvpToken } from '~/cookies'

export interface Guest {
  id: string
  names: string
  guests: number
}

export interface RSVPData {
  name: string
  email: string
  phone: string
  attending: boolean
  dietary: string
  message: string
}

type Props = {}

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  try {
    const name = (body.get('name') as string)?.trim().toLowerCase()
    if (!name) return json({ error: 'name is required' }, 400)

    const guests = await getGuests()
    const guest = guests.find((g) => g.names.toLowerCase().includes(name))
    if (!guest) return json({ error: 'Guest not found' }, 404)
    cookie.rsvpToken = guest
    return json(
      { success: true, guest },
      {
        headers: { 'Set-Cookie': await rsvpToken.serialize(cookie) },
        status: 200,
      },
    )
  } catch (e) {
    console.error(e)
    return json({ error: 'Something went wrong, please try again' }, 500)
  }
}

const Rsvp = (props: Props) => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (!params.id) navigate('/')
  }, [params, navigate])

  return <Outlet />
}

export default Rsvp
