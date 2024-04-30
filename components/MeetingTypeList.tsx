"use client";
import React, { useState } from "react";
import MeetingTypeListItem from "./MeetingTypeListItem";
import { useRouter } from "next/navigation";

export default function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    undefined | "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting"
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <MeetingTypeListItem
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start as instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-orange-1"
      />
      <MeetingTypeListItem
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <MeetingTypeListItem
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
        className="bg-purple-1"
      />
      <MeetingTypeListItem
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />
    </section>
  );
}
