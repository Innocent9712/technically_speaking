import { Editor } from "@tiptap/react";
import { useState } from "react";
import { CodeBlockIcon, ImageIcon, YouTubeIcon } from "@/icons";
import { Button } from "@/primitives/Button";
import { Input } from "@/primitives/Input";
import { Popover } from "@/primitives/Popover";
import styles from "./Toolbar.module.css";

type Props = {
  editor: Editor;
};

export function ToolbarMedia({ editor }: Props) {
  function addImage(url: string) {
    if (!url.length) {
      return;
    }
    editor.chain().setImage({ src: url }).run();
  }

  function addYouTube(url: string) {
    if (!url.length) {
      return;
    }
    editor.chain().setYoutubeVideo({ src: url }).run();
  }

  return (
    <>
      <Button
        className={styles.toolbarButton}
        variant="subtle"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        data-active={editor.isActive("codeBlock") ? "is-active" : undefined}
        aria-label="Code block"
      >
        <CodeBlockIcon />
      </Button>

      <Popover content={<MediaPopover variant="image" onSubmit={addImage} />}>
        <Button
          className={styles.toolbarButton}
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: "" }).run()}
          data-active={editor.isActive("image") ? "is-active" : undefined}
          aria-label="Image"
        >
          <ImageIcon />
        </Button>
      </Popover>

      <Popover content={<MediaPopover variant="youtube" onSubmit={addYouTube} />}>
        <Button
          className={styles.toolbarButton}
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: "" }).run()}
          data-active={editor.isActive("youtube") ? "is-active" : undefined}
          aria-label="YouTube"
        >
          <YouTubeIcon />
        </Button>
      </Popover>
    </>
  );
}

type MediaPopoverProps = {
  variant: "image" | "youtube";
  onSubmit: (url: string) => void;
};

function MediaPopover({ variant, onSubmit }: MediaPopoverProps) {
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setValue(reader.result as string); // Set the Base64 string
        }
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      // If a file is selected, use the Base64 string
      onSubmit(value);
    } else {
      // Otherwise, use the URL input
      onSubmit(value);
    }
    setValue(""); // Reset input
    setFile(null); // Reset file
  };

  return (
    <form className={styles.toolbarPopover} onSubmit={handleSubmit}>
      <label className={styles.toolbarPopoverLabel} htmlFor="">
        Add {variant === "image" ? "image" : "YouTube"} URL {variant === "image" ? "or Upload Image" : ""}
      </label>
      <div className={styles.toolbarPopoverBar}>
        {variant === "image" && (
          
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.toolbarPopoverInput}
            />
            )}
            <Input
              className={styles.toolbarPopoverInput}
              placeholder={variant === "image" ? "Or paste image URL" : "Paste YouTube URL"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
        <Button className={styles.toolbarPopoverButton}>
          Add {variant === "image" ? "image" : "video"}
        </Button>
      </div>
    </form>
  );
}
