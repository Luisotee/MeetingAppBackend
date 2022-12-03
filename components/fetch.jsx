import { supabase } from "../supabase";
export async function fetchData({ setMeetings, meetings }) {
  const { data, error } = await supabase
    .from("meetings")
    .select(
      "meetingName, meetingDuration, meetingDescription, dataISO, time1, id"
    );

  if (error) console.log("error: ", error);

  return {
    props: {
      data,
    },
  };
}
