"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import {
  createProjectSchema,
  type CreateProjectInput,
} from "@/app/schemas/project";

import { createProject } from "@/app/projects/actions";

export default function CreateProjectForm() {
  const router = useRouter();

  const [serverError, setServerError] =
    useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateProjectInput>({
    resolver: zodResolver(
      createProjectSchema
    ),
    defaultValues: {
      name: "",
      description: "",
      priority: "medium",
      status: "active",
    },
  });

  const onSubmit = async (
    data: CreateProjectInput
  ) => {
    setServerError(null);

    const result = await createProject(data);

    if (!result.success) {
      setServerError(
        "Something went wrong while creating the project."
      );

      return;
    }

    router.push("/projects");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium"
        >
          Project name
        </label>

        <Input
          id="name"
          placeholder="e.g. DevFlow"
          {...register("name")}
        />

        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium"
        >
          Description
        </label>

        <textarea
          id="description"
          placeholder="Describe your project..."
          {...register("description")}
          className="min-h-32 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
        />

        {errors.description && (
          <p className="mt-1.5 text-xs text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="priority"
            className="mb-2 block text-sm font-medium"
          >
            Priority
          </label>

          <select
            id="priority"
            {...register("priority")}
            className="h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300 outline-none focus:border-indigo-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {errors.priority && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.priority.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium"
          >
            Status
          </label>

          <select
            id="status"
            {...register("status")}
            className="h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300 outline-none focus:border-indigo-500"
          >
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">
              Completed
            </option>
            <option value="archived">
              Archived
            </option>
          </select>
        </div>
      </div>

      {serverError && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {serverError}
        </div>
      )}

      <div className="flex justify-end gap-3 border-t border-zinc-800 pt-5">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.back()}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Creating..."
            : "Create Project"}
        </Button>
      </div>
    </form>
  );
}