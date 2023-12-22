export const MainLayout = ({ children }) => {
  return (
    <div className='app h-full w-full flex flex-col gap-10 justify-center '>
      {children}
    </div>
  )
}