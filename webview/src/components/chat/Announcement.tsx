import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"

interface AnnouncementProps {
  version: string
  hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in CodeyProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
  const minorVersion = version.split(".").slice(0, 2).join(".") // 2.0.0 -> 2.0
  return (
    <div
      style={{
        backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
        borderRadius: "3px",
        padding: "12px 16px",
        margin: "5px 15px 5px 15px",
        position: "relative",
        flexShrink: 0,
      }}>
      <VSCodeButton
        appearance="icon"
        onClick={hideAnnouncement}
        style={{ position: "absolute", top: "8px", right: "8px" }}>
        <span className="codicon codicon-close"></span>
      </VSCodeButton>
      <h3 style={{ margin: "0 0 8px" }}>
        🎉{"  "}New in v{minorVersion}
      </h3>
      <p style={{ margin: "5px 0px" }}>
        New name! Meet Codey, an AI assistant that can use your <strong>CLI</strong> a<strong>N</strong>d{" "}
        <strong>E</strong>ditor.
      </p>
      <ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
        <li>
          Responses are now streamed + a yellow text decoration animation to keep track of Codey's progress as he edits
          files.
        </li>
        <li>
          Cancel button to give Codey feedback if he goes off in the wrong direction, giving you more control over
          tasks.
        </li>
        <li>
          Re-imagined tool calling prompt resulting in ~40% fewer requests to accomplish tasks + better performance with
          other models.
        </li>
        <li>Search and use any model with OpenRouter (search "free" for no-cost options).</li>
      </ul>
      <p style={{ margin: "0" }}>
        <VSCodeLink href="https://x.com/sdrzn/status/1843989769828602273" style={{ display: "inline" }}>
          See a demo of the changes here.
        </VSCodeLink>
        I'm excited for you to try this update, and would love to hear how you like it in our Discord. Come say hi!{" "}
        <VSCodeLink style={{ display: "inline" }} href="https://discord.gg/codey">
          https://discord.gg/codey
        </VSCodeLink>
      </p>
    </div>
  )
}

export default memo(Announcement)
