import { Separator } from ".//ui/separator"

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center h-28">
      <Separator color="black" />
      <div className="text-2xl">ShopSphere &copy; {currentYear}</div>
    </div>
  )
}

export default Footer