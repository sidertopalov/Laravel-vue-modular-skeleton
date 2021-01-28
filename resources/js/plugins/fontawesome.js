import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faPlus,
  faList,
  faCogs,
  faDoorOpen,
  faTimesCircle,
  faEdit,
  faPhoneAlt,
  faBriefcase,
  faUsers,
  faUserTag,
  faUserClock,
  faBars,
  faUserFriends,
  faBook,
  faEnvelope,
  faSms,
  faInfoCircle,
  faFilter,
  faChevronUp,
  faChevronDown,
  faAngleUp,
  faAngleDown,
  faAddressBook,
  faChevronCircleUp,
  faChevronCircleDown,
  faTimes,
  faCheckCircle,
  faSpinner,
  faClock,
  faPaperPlane,
  faCertificate,
  faExclamation,
  faExclamationCircle,
  faEye,
  faSyncAlt,
  faUserCheck,
  faSearch,
  faHome,
  faArrowAltCircleRight,
  faSignInAlt,
  faHouseUser,
  faUserPlus,
  faLanguage,
  faGlobeEurope
} from '@fortawesome/free-solid-svg-icons'

import {
  faViber
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faPlus,
  faList,
  faCogs,
  faDoorOpen,
  faTimesCircle,
  faEdit,
  faPhoneAlt,
  faBriefcase,
  faUsers,
  faUserTag,
  faUserClock,
  faBars,
  faUserFriends,
  faBook,
  faEnvelope,
  faViber,
  faSms,
  faInfoCircle,
  faFilter,
  faChevronUp,
  faChevronCircleUp,
  faChevronCircleDown,
  faChevronDown,
  faAngleUp,
  faAngleDown,
  faAddressBook,
  faTimes,
  faCheckCircle,
  faSpinner,
  faClock,
  faPaperPlane,
  faCertificate,
  faExclamationCircle,
  faEye,
  faSyncAlt,
  faUserCheck,
  faSearch,
  faHome,
  faArrowAltCircleRight,
  faSignInAlt,
  faHouseUser,
  faUserPlus,
  faLanguage,
  faGlobeEurope
)

Vue.component('fa', FontAwesomeIcon)
