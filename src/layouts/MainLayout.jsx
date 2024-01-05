export const MainLayout = ({ children }) => {
  return (
    <div className='app h-full w-full flex flex-col justify-center text-base-100'>
      {children}
    </div>
  )
}