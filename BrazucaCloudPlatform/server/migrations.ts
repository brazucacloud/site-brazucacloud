
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from 'ws';

async function main() {
  console.log('Creating tables...');
  
  const sql = neon(process.env.DATABASE_URL!, { webSocketConstructor: ws });
  const db = drizzle(sql);

  try {
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        fullname TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create admins table
    await sql`
      CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Drop existing plans table if it exists
    await sql`DROP TABLE IF EXISTS user_plans CASCADE`;
    await sql`DROP TABLE IF EXISTS plans CASCADE`;
    
    // Create plans table with correct schema
    await sql`
      CREATE TABLE IF NOT EXISTS plans (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        price TEXT NOT NULL,
        description TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'inativo',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_by TEXT NOT NULL REFERENCES admins(id)
      )
    `;

    // Create user_plans table
    await sql`
      CREATE TABLE IF NOT EXISTS user_plans (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id),
        plan_id TEXT NOT NULL REFERENCES plans(id),
        status TEXT NOT NULL,
        next_payment TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
