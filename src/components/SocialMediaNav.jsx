export const SocialMediaNav = () => {
  return (
    <ul className="flex justify-center md:justify-start my-5 gap-5">
        <li>
            <a 
                href="#" 
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-100 transition duration-200"
            >
                <img src="../images/linkedin.png" alt="LinkedIn" />
            </a>
        </li>

        <li>
            <a 
                href="#" 
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-100 transition duration-200"
            >
                <img src="../images/facebook.png" alt="Facebook" />
            </a>
        </li>

        <li>
            <a 
                href="#" 
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-100 transition duration-200"
            >
                <img src="../images/instagram.png" alt="Instagram" />
            </a>
        </li>

        <li>
            <a 
                href="#" 
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-100 transition duration-200"
            >
                <img src="../images/twitter.png" alt="Twitter" />
            </a>
        </li>
    </ul>
  )
}
