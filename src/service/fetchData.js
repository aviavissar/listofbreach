export const getData = async () => {
  try {
    const response = await fetch(
      "https://guard.io/v2/hiring/fe/breaches?offset=0",
      {
        method: "GET",
        mode: "cors", 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
          "X-Best-Pokemon": "Pikachu",
        },
        redirect: 'follow',
        referrerPolicy: "no-referrer",
      }
    );
    const res_obj = await response.json();

    return res_obj.items; // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log("client error" + error);
  }
};
