CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
