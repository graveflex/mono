module.exports = {
  ci: {
    collect: {
      url: [`https://${process.env.VERCEL_DOMAIN}/`],
      numberOfRuns: 2,
      settings: {
        extraHeaders: JSON.stringify({
          'x-vercel-protection-bypass':
            process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
          Cookie: 'NEXT_LOCALE=en-US',
          'Sec-CH-Prefers-Color-Scheme': 'light'
        })
      }
    },
    assert: {
      preset: 'lighthouse:recommended'
    }
  }
};
