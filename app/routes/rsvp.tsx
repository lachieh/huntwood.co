import React, { useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

type Props = {}

const Rsvp = (props: Props) => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (!params.id) {
      navigate('/')
      return null
    }
  }, [params, navigate])

  return <Outlet />
}

export default Rsvp
