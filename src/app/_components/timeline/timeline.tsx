import AdvisorAssignment from "./_components/milestones/AdvisorAssignment";
import ApprovalThesisDraft from "./_components/milestones/ApprovalThesisDraft";
import ApprovalThesisPlan from "./_components/milestones/ApprovalThesisPlan";
import AssignmentDraftReviewers from "./_components/milestones/AssignmentDraftReviewers";
import AssignmentPlanReviewers from "./_components/milestones/AssignmentPlanReviewers";
import CompletedThesis from "./_components/milestones/CompletedThesis";
import Prerequisites from "./_components/milestones/Prerequisites";
import RisingObservations from "./_components/milestones/RisingObservations";
import SubmitPlan from "./_components/milestones/SubmitPlan";
import SupportingThesis from "./_components/milestones/SupportingThesis";
import Turnitin from "./_components/milestones/Turnitin";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="flex w-full justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          ¿Cuál es el proceso de elaborar una tesis?
        </h2>
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-start justify-start py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 w-px bg-muted-foreground/20" />
        <div className="grid gap-12">
          <Prerequisites />
          <SubmitPlan />
          <AssignmentPlanReviewers />
          <ApprovalThesisPlan />
          <AdvisorAssignment />
          <ApprovalThesisDraft />
          <AssignmentDraftReviewers />
          <Turnitin />
          <SupportingThesis />
          <RisingObservations />
          <CompletedThesis />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
