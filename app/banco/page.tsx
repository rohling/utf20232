import { sql } from "@vercel/postgres";

export default async function Home(){
  const { rows } = await sql`SELECT * from student`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name}
        </div>
      ))}
    </div>
  );
}