import { useState } from "preact/hooks";

type GreetingProps = {
  messages: string[];
};

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = () => {
    const possibleMessages = messages.filter((message) => message !== greeting);
    return possibleMessages[
      Math.floor(Math.random() * possibleMessages.length)
    ];
  };

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        class="py-2 px-4 bg-black text-white"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
