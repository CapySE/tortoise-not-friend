"use client";
import { Tag } from "@/app/_components/tag";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { generateAvatar } from "@/lib/avatar";
import { cn } from "@/utils/tailwind-merge";
import {
  faCheckCircle,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { tagStyle } from "../../../utils/icon-mapping";
import { type ProfilePreviewProps } from "../types";
import Card from "./card";
import { RatingIcon } from "./rating-icon";

export function ProfilePreview({
  props,
  role,
}: {
  props: ProfilePreviewProps;
  role: string;
}) {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="m-auto aspect-[0.76] min-h-[424px] max-w-[323px]">
          <Card {...props} />
        </DrawerTrigger>
        <DrawerOverlay
          className="bg-opacity-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${props.image || generateAvatar(props.aka)})`,
          }}
        />
        <DrawerProfile props={props} role={role} />
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger className="m-auto aspect-[0.76] min-h-[424px] max-w-[323px]">
        <Card {...props} />
      </DialogTrigger>
      <DialogProfile props={props} role={role} />
    </Dialog>
  );
}

type ProfileProps = {
  props: ProfilePreviewProps;
  role: string;
};

function DialogProfile(props: ProfileProps) {
  const { image, rating } = props.props;
  return (
    <DialogContent
      className="flex min-h-[568px] min-w-[845px] gap-6 rounded-2xl border-2 border-solid
    border-neutral-300 bg-white p-6"
    >
      <div className="relative ">
        <div className="h-full min-w-[400px] overflow-hidden rounded-md">
          {image ? (
            <Image
              src={image}
              alt="card"
              className="rounded-md object-cover object-top"
              fill
            />
          ) : (
            <Image
              src={generateAvatar(props.props.aka)}
              className="h-full rounded-md object-cover object-top"
              alt={`Avatar of ${props.props.aka}`}
            ></Image>
          )}
        </div>
        <div className="absolute right-[-28px] top-[-20px] z-30 h-16 w-24 text-[#FFC661]">
          <RatingIcon rating={rating} />
        </div>
      </div>
      <div className="relative flex w-full flex-col gap-3 py-2">
        <Name {...props.props} />
        <About props={props.props} />
        <Interests props={props.props} />
        <ReviewChat props={props.props} role={props.role} />
      </div>
    </DialogContent>
  );
}

function DrawerProfile(props: ProfileProps) {
  return (
    <DrawerContent className="flex flex-col gap-2 bg-white p-4">
      <div className="absolute right-3 top-7">
        <RatingIcon rating={props.props.rating} />
      </div>
      <div className="flex flex-col gap-2 rounded-r-3xl">
        <Name {...props.props} />
        <About props={props.props} />
        <Interests props={props.props} />
        <ReviewChat props={props.props} role={props.role} />
      </div>
    </DrawerContent>
  );
}

function Name(props: ProfilePreviewProps) {
  const { aka, age } = props;
  return (
    <div className="flex flex-row gap-3 py-3">
      <div className="h2 font-bold text-high">
        {aka}, {age}
      </div>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="h-6 w-6 self-center text-secondary-500"
      />
    </div>
  );
}

function About({
  props,
  isDrawer,
}: {
  props: ProfilePreviewProps;
  isDrawer?: boolean;
}) {
  const { bio } = props;
  const maxWidth = isDrawer ? "" : "max-w-[340px]";
  return (
    <div className={cn("flex flex-col gap-3 text-wrap break-words", maxWidth)}>
      <div className="h4 text-medium">About</div>
      <div className="h5 text-high">{bio}</div>
    </div>
  );
}

function Interests({
  props,
  isDrawer,
}: {
  props: ProfilePreviewProps;
  isDrawer?: boolean;
}) {
  const { interests } = props;
  const size = isDrawer ? "" : "min-h-[260px]";
  return (
    <div className={cn("flex flex-col gap-3 text-wrap break-words", size)}>
      <div className="h4 text-medium">Interests</div>
      <div className="flex flex-row flex-wrap items-center justify-start gap-2 self-stretch">
        {interests.sort().map((tag, index) => {
          return (
            <Tag
              key={index}
              variant="solid"
              icon={tagStyle[tag].icon}
              size="md"
              color={tagStyle[tag].color}
            >
              {tag}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

type ReviewChatProps = {
  props: ProfilePreviewProps;
  role: string;
};

function ReviewChat(props: ReviewChatProps) {
  const { reviews, id } = props.props;
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div
      className={cn(
        " flex flex-row gap-3 self-end",
        props.role === "participant" ? "w-[300px]" : "w-[150px]",
        isMobile ? "" : "absolute bottom-0",
      )}
    >
      <Button
        variant="outline"
        size="md"
        className="w-full border-secondary-500 text-secondary-500 hover:bg-secondary-400"
      >
        <FontAwesomeIcon icon={faHeart} className="mr-2" />
        {reviews} Reviews
      </Button>
      {props.role === "participant" && (
        <Link href={`/chat/${id}`}>
          <Button
            size="md"
            className="w-full bg-secondary-500 hover:bg-secondary-400"
          >
            <FontAwesomeIcon icon={faComment} className="mr-2 text-white" />
            Go to Chat
          </Button>
        </Link>
      )}
    </div>
  );
}
