import type { PrismaClient } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/lucia").Auth;
		type UserAttributes = {
			username: string
			email: string
		}
	}
}

export {};
