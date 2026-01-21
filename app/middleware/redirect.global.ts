export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    const visited = useCookie('portfolio-visited', { default: () => false, maxAge: 60 * 60 * 24 * 365 })
    const redirectURL = "https://www.giosuecattelan.it"
    
    if (visited.value) {
      // Visita non prima: redirect diretto
      navigateTo(redirectURL, { external: true })
    } else {
      // Prima visita: timeout prima del redirect
      setTimeout(async () => {
        visited.value = true // Imposta cookie per le visite future
        await navigateTo(redirectURL, { external: true })
      }, 3500);
    }
  }
})