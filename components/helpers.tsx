import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function LinkWrapper(props: { link: string; content: React.ReactNode, underlined?: boolean }) {
  const isExternalLink = props.link.startsWith("http");

  if (!props.link) {
    return props.content;
  }

  return (
    <Link
      className="no-line-height"
      href={props.link}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      itemProp="name"
      title={
        isExternalLink
          ? `External link to ${props.link}`
          : `Link to ${props.link}`
      }
    >
      {props.content}
      {props.underlined && isExternalLink && <ArrowTopRightIcon />}
    </Link>
  );
}
