import clsx from "clsx";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx(
        "h-5 w-2/5 animate-pulse rounded-xl bg-slate-200 dark:bg-white/5 ",
        className,
      )}
      {...props}
    />
  );
}
