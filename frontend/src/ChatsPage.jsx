import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="af68813b-3104-4a90-8ef6-83c74eebf163"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
