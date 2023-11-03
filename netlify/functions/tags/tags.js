// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: `<html><body><h1>${Date.now()}</h1></body></html>`,
      headers: { 
        "content-type": "text/html",
        "Netlify-CDN-Cache-Control": "public, max-age=0, stale-while-revalidate=10000",
      },
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
