import React from "react";

const ObservationPlan = () => {
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] items-start gap-6">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          {/* <CalendarIcon className="h-6 w-6 text-primary-foreground" /> */}
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Milestone 1</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-start gap-6">
        <div className="grid gap-2 text-right">
          <h3 className="text-lg font-semibold">Milestone 2</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
        </div>
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          {/* <CalendarIcon className="h-6 w-6 text-primary-foreground" /> */}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-start gap-6">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          {/* <CalendarIcon className="h-6 w-6 text-primary-foreground" /> */}
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Milestone 3</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-start gap-6">
        <div className="grid gap-2 text-right">
          <h3 className="text-lg font-semibold">Milestone 4</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
        </div>
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          {/* <CalendarIcon className="h-6 w-6 text-primary-foreground" /> */}
        </div>
      </div>
    </div>
  );
};

export default ObservationPlan;
