import { CONTENT_ENDPOINT } from '@Server/endpoints'
import { CoverPage } from '@Server/manager/cms/cms-manager'

async function request<T>(url: string, verb: 'GET'): Promise<T> {
  const requestInit: RequestInit = {
    method: verb,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  const results = await fetch(url, requestInit)

  if (results.status !== 200) {
    throw new Error(`expected 200, got ${results.status}`)
  }

  return await results.json()
}

async function getCoverPage(): Promise<CoverPage> {
  return await request<CoverPage>(CONTENT_ENDPOINT + '/cover-page', 'GET')
}

export const API = {
  getCoverPage
}
