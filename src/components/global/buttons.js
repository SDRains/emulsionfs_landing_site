import {ArrowRightFromLineIcon} from "lucide-react";

const PrimaryCTAButton = ({content, link, styles = '', darkMode = false}) => {
    const baseFontStyle = 'text-lg font-serif font-semibold'
    const lightModeStyle = 'bg-primary-green-600 px-7 py-3.5 text-white transition-colors hover:bg-primary-green-700'
    const darkModeStyle = 'bg-white px-7 py-3.5 text-dark-blue transition-colors hover:bg-primary-cream'

    return (
        <a
            href={link}
            className={`${styles} ${baseFontStyle} ${darkMode ? darkModeStyle : lightModeStyle}`}
        >
            {content}
        </a>
    )
}

const PrimarySubCTAButton = ({content, link, styles = '', darkMode = false}) => {
    const baseFontStyle = 'text-lg font-serif font-semibold'
    const lightModeStyle = 'group inline-flex items-center gap-2 border border-[#0f2038]/25 bg-white/30 px-7 py-3.5 text-[#0f2038] backdrop-blur-sm transition-colors hover:bg-white/50'
    const darkModeStyle = 'group inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-white transition-colors hover:bg-white hover:text-dark-background backdrop-blur-sm'

    return (
        <a
            href={link}
            className={`${styles} ${baseFontStyle} ${darkMode ? darkModeStyle : lightModeStyle}`}
        >
            {content}
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRightFromLineIcon className='size-4' />
            </span>
        </a>
    )
}

export {PrimaryCTAButton, PrimarySubCTAButton}