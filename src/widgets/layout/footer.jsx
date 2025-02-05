


import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative bg-gradient-to-b from-400 to-gray-200 text-black px-6 py-10">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center text-center lg:text-left">
          {/* Title and Description */}
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
            <Typography variant="h4" className="mb-4 font-extrabold text-blue-900">
              {title}
            </Typography>
            <Typography className="text-lg leading-relaxed text-gray-900">
              {description}
            </Typography>
            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <IconButton
                    color="white"
                    className="rounded-full  p-3 shadow-lg hover:bg-[#0FFCBE]"
                  >
                    <i className={`fa-brands fa-${name} text-xl`} />
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          {/* Menu Links */}
          <div className="w-full lg:w-5/12 px-4 grid grid-cols-2 gap-12">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  className="mb-4 font-semibold uppercase text-blue-900"
                >
                  {name}
                </Typography>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-gray-900 transition-colors hover:text-blue-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-blue-500" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-center md:justify-between">
          {/* Copyright */}
          <Typography
            variant="small"
            className="text-gray-900"
          >
            {copyright}
          </Typography>
          {/* Back to Top Button */}
          <a
            href="#top"
            className="px-4 py-2 text-sm font-medium bg-blue-900 text-white rounded-full shadow-md hover:bg-yellow-800 transition"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "AZ Infosec",
  description: "Empowering businesses with secure and reliable solutions.",
  socials: [
    {
      color: "white",
      name: "linkedin",
      path: "https://www.linkedin.com/company/az-infosec/",
    },
    {
      color: "white",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "white",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
  ],
  menus: [
    {
      name: "Useful Links",
      items: [
        { name: "About Us", path: "/aboutus" },
        { name: "Privacy Policy", path: "/privacypolicy" },
        { name: "Terms and Conditions", path: "/termsandconditions" },
      ],
    },
    {
      name: "Other Resources",
      items: [
        { name: "Blogs", path: "/blog" },
        { name: "Articles", path: "/articles" },
        { name: "News & Updates", path: "/news-updates" },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} by AZ Infosec.
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500"
      >

      </a>

    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;



