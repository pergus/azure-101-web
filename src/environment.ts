export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  baseUrl: "https://funcapp-xqodmsj6q5ckm.azurewebsites.net",
}

export const environment: Environment = prod
