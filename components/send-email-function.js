export const sendMail = async (data) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    //if sucess do whatever you like, i.e toast notification
    setTimeout(() => reset(), 2000);
  } catch (error) {
    // toast error message. whatever you wish
  }
};
