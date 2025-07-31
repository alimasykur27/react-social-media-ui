import "./sidebar.css";
import {
  Bookmark,
  Event,
  Group,
  HelpOutline,
  Message,
  PlayCircle,
  RssFeed,
  School,
  WorkOutline
} from "@mui/icons-material"
import CloseFriend from "../closefriend/CloseFriend";
import { Users } from "../../dummyData"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Course</span>
          </li>
        </ul>
        <div className="sidebarButton">Show More</div>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {
            Users.map((u) => (
              <CloseFriend user={u} key={u.id} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}
