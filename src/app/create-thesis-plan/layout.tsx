import SkeletonHeader from "@/components/shared/header/skeleton/SkeletonHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center pb-64">
      <SkeletonHeader />
      <div className="container mb-16 pt-16">{children}</div>
    </section>
  );
}
