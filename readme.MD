<h1>100x Schema Design.</h1>

<b>User - </b>(Table name: Users)

<li>user_id: bigint serial(Primary Key)</li> // Serial means auto increment value.
<li>username: string unique 50 char max</li>
<li>email: string</li>
<li>email_verified_at: timestamp nullable</li>
<li>display_name: string 50 character max</li>
<li>bio: text</li>
<li>password: string 225 char max (Not null)</li>
<li>profile_picture_url: string nullable</li>
<li>registration_date: timestamp nullable</li>


