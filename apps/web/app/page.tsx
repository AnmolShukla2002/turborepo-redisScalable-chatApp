"use client";
import classes from "./page.module.css";

export default function Page() {
  return (
    <div>
      <div>ALL Messages will appear here</div>
      <div>
        <input className={classes["chat-input"]} placeholder="Message..." />
        <button>Send</button>
      </div>
    </div>
  );
}
