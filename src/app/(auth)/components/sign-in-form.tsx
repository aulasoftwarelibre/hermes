import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

export default function SignInForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted with email:', email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-500 p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <Image
            className="mx-auto h-24 w-auto"
            src="/images/logo-asl.png"
            alt="Aula Software Libre"
            width={96}
            height={96}
          />
          <h2 className="mt-6 text-2xl font-bold text-white">
            Iniciar sesión en
          </h2>
          <p className="mt-2 text-xl text-gray-300">CODEX</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Introduce tu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
              Continuar con el email
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-xs text-gray-400">
          Esta plataforma es exclusiva para miembros de la Universidad de
          Córdoba. Inicia sesión con tu correo corporativo{' '}
          <span className="font-medium text-gray-300">@uco.es</span> para tener
          acceso.
        </p>
      </div>
    </div>
  )
}
