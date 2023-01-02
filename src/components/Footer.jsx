import { SocialMediaNav } from "./SocialMediaNav"


export const Footer = () => {
  return (
    <footer
        className="w-full py-1 bg-red"
    >
        <div className="w-5/6 mx-auto flex justify-between items-center">
            <p className="text-deep-blue text-sm font-medium">
                <strong className="block font-playfair text-2xl font-semibold text-white">KattyV</strong>
                &copy;2022. All rights reserved
            </p>

            <SocialMediaNav />
        </div>
    </footer>
  )
}
