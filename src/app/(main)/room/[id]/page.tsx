import { Room } from "@/app/Room";
import { TextEditor } from "@/components/TextEditor";
// import "@/styles/globals.css";


export default function Editor() {
  return (
    <main>
      <Room>
        <TextEditor />
      </Room>
    </main>
  );
}
