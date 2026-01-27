'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-border bg-card px-6 py-12 lg:py-16">
			<div className="bg-primary/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-2 xl:gap-12">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-xl">V</span>
						</div>
						<span className="text-foreground font-bold text-2xl">Veridian</span>
					</div>
					<p className="text-muted-foreground text-sm max-w-md">
						Votre partenaire pour une présence en ligne performante et optimisée.
					</p>
				</AnimatedContainer>

				<AnimatedContainer delay={0.2} className="space-y-3">
					<h3 className="text-foreground font-semibold text-sm mb-4">Contact</h3>
					<div className="text-muted-foreground space-y-2 text-sm">
						<a href="mailto:contact@veridian.fr" className="hover:text-primary inline-flex items-center gap-2 transition-colors">
							<Mail className="size-4" />
							<span>contact@veridian.fr</span>
						</a>
						<a href="tel:+33000000000" className="hover:text-primary inline-flex items-center gap-2 transition-colors">
							<Phone className="size-4" />
							<span>+33 0 00 00 00 00</span>
						</a>
						<div className="inline-flex items-center gap-2">
							<MapPin className="size-4" />
							<span>Paris, France</span>
						</div>
					</div>
				</AnimatedContainer>
			</div>

			<div className="border-t border-border w-full mt-12 pt-6">
				<p className="text-muted-foreground text-center text-sm">
					© {new Date().getFullYear()} Veridian. Tous droits réservés.
				</p>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};