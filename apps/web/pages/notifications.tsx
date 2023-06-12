import NotificationsComp from "../src/screens/notifications/NotificationsComp";
import data from "../data/data";
const Notifications = () => {
  return(
    <NotificationsComp {...data.companies[0]}/>
  )
}

export default Notifications;