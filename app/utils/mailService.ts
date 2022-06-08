import type { RSVPData } from '../routes/rsvp'
import * as fs from 'fs'
import * as path from 'path'
import FormData from 'form-data'
import Handlebars from 'handlebars'
import Mailgun from 'mailgun.js'

const config = {
  key: process.env.MAILGUN_API_KEY ?? '',
  username: process.env.MAILGUN_USERNAME ?? '',
  domain: process.env.MAILGUN_DOMAIN ?? '',
  from: process.env.MAILGUN_FROM ?? '',
  to: process.env.MAILGUN_TO ?? '',
}

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  key: config.key,
  username: config.username,
})

export async function sendMail(html: string, subject: string): Promise<void> {
  mg.messages.create(config.domain, {
    from: config.from,
    to: config.to,
    subject,
    html,
  })
}

function buildTemplate<T = any>(
  template: string,
): HandlebarsTemplateDelegate<T> {
  const templateFile = path.resolve(
    // load from within .netlify/functions-internal/ folder
    `${__dirname}/../../templates/${template}.hbs`,
  )
  const templateContent = fs.readFileSync(templateFile, 'utf8')
  return Handlebars.compile(templateContent)
}

export const rsvpTemplate = buildTemplate<RSVPData>('rsvp')
