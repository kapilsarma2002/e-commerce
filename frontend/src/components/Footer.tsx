import { Separator } from './ui/separator'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center min-h-auto">
      <div className="flex-grow" />
      <div className='w-[100%] px-32'>
        <Separator color="black" />
      </div>
      <div className="text-2xl mt-2">ShopSphere &copy; {currentYear}</div>
    </div>
  )
}

export default Footer
