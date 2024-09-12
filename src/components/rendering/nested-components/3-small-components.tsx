
// Small component for displaying user avatar
function UserAvatar({ avatar, name }: { avatar: string, name: string }) {
  return <img src={avatar} alt={`${name}'s avatar`} />;
}
// Small component for displaying user info
function UserInfo({ name, email, bio }: { name: string, email: string, bio: string }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{bio}</p>
    </div>
  );
}
// Small component for displaying user stats
function UserStats({ posts, followers, following }: { posts: number, followers: number, following: number }) {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Posts: {posts}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}

// Main UserProfile component that composes the smaller components
function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "I am a software developer who loves coding and sharing knowledge.",
    avatar: "https://example.com/avatar.jpg",
    stats: {
      posts: 45,
      followers: 120,
      following: 80,
    },
  };

  return (
    <div>
      {/* Using smaller components to display parts of user profile */}
      <UserAvatar avatar={user.avatar} name={user.name} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserStats 
        posts={user.stats.posts} 
        followers={user.stats.followers} 
        following={user.stats.following} 
      />
    </div>
  );
}

export default UserProfile;
