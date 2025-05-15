
// This is a simple logo component that can be reused in different parts of the application.
function Logo({width= '50px'}) {
  return (
    <div>
      <img
        src="/blog_logo1.png"
        alt="Logo"
        width={width}
    />
    </div>
  )
}

export default Logo