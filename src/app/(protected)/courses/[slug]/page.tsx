"use client";
import { CourseDetails } from "@/sub-pages/course/CourseDetails";
import { useParams } from "next/navigation";

const CourseDetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <CourseDetails params={params} />
    </div>
  );
};
export default CourseDetailsPage;
