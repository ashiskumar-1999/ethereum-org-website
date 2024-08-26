import { cva, VariantProps } from "class-variance-authority"
import type { FC, ReactNode, SVGProps } from "react"

import { cn } from "@/lib/utils/cn"

import { BaseLink } from "../ui/Link"

type SvgButtonLinkProps = {
  Svg: FC<SVGProps<SVGElement>>
  label?: string
  children: ReactNode
  href: string
  className?: string
  size?: number
}

const variants = cva("flex items-center gap-3.5", {
  variants: {
    variant: {
      col: "flex-col text-center [&_.body]:text-center",
      row: "flex-row text-start [&_.body]:text-left [&_.header]:self-start",
    },
  },
  defaultVariants: {
    variant: "row",
  },
})

type Variants = VariantProps<typeof variants>

const SvgButtonLink = ({
  label,
  children,
  Svg,
  className,
  variant,
  ...props
}: SvgButtonLinkProps & Variants) => (
  <BaseLink
    className={cn(
      "group rounded-2xl no-underline focus:outline focus:outline-4 focus:outline-offset-8",
      className
    )}
    hideArrow
    {...props}
  >
    <div className={cn(variants({ variant }))}>
      <div
        className={cn(
          "header",
          "relative grid aspect-square size-[5em] shrink-0 place-items-center",
          "rounded-2xl border shadow-svg-button-link transition-all duration-200",
          "group-hover:shadow-svg-button-link-hover group-hover:transition-all group-hover:duration-200",
          "group-focus:shadow-none group-focus:transition-all group-focus:duration-200"
        )}
      >
        <Svg
          className={cn(
            "group-hover:rotate-3 group-hover:scale-110 group-hover:hue-rotate-15",
            "group-focus:rotate-3 group-focus:scale-110 group-focus:hue-rotate-15",
            "text-4xl duration-200 group-hover:duration-200 group-focus:rotate-3"
          )}
        />
      </div>
      <div className="body">
        {label && <p className="text-xl font-bold">{label}</p>}
        {children}
      </div>
    </div>
  </BaseLink>
)

export default SvgButtonLink
