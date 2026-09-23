// Build-time environment validation (SEC-003)
// Validates NEXT_PUBLIC_SITE_URL is set for production builds

const requiredEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
];

function validateEnv() {
  const missing = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Build validation failed:');
    console.error('');
    console.error('Missing required environment variables:');
    for (const envVar of missing) {
      console.error(`  - ${envVar}`);
    }
    console.error('');
    console.error('Set them in Vercel project settings or .env.production');
    console.error('');
    process.exit(1);
  }

  console.log('\x1b[32m%s\x1b[0m', '✅ Environment validation passed');
  console.log(`   NEXT_PUBLIC_SITE_URL = ${process.env.NEXT_PUBLIC_SITE_URL}`);
}

validateEnv();