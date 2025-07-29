import { useForm } from "@tanstack/react-form";

// Mock API call for async validation
const checkDistrictExists = async (
	name: string,
): Promise<string | undefined> => {
	console.log(`Checking if "${name}" exists...`);
	await new Promise((resolve) => setTimeout(resolve, 500));
	if (name.toLowerCase().includes("invalid")) {
		return "This district does not seem to exist.";
	}
	return undefined;
};

// A custom hook to encapsulate the form logic
export function useSearchHomepageForm(opts?: {
	onSubmit?: (data: { schoolOrDistrict: string; location: string }) => void;
}) {
	const form = useForm({
		defaultValues: {
			schoolOrDistrict: "",
			location: "",
		},
		onSubmit: async ({ value }) => {
			// Here you would typically handle the form submission,
			// e.g., navigate to a search results page.
			console.log("Form submitted with:", value);
			alert(`Searching for ${value.schoolOrDistrict} in ${value.location}`);
			opts?.onSubmit?.(value);
		},
	});

	return form;
}

// Reusable Field Component for better structure
function FieldInfo({
	field,
}: {
	field: {
		state: { meta: { touchedErrors: string[]; isValidating: boolean } };
	};
}) {
	return (
		<>
			{field.state.meta.touchedErrors ? (
				<em>{field.state.meta.touchedErrors}</em>
			) : null}
			{field.state.meta.isValidating ? <em>Validating...</em> : null}
		</>
	);
}

export default function SearchHomepageForm() {
	const form = useSearchHomepageForm();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="flex w-full"
		>
			<div>
				<form.Field
					name="schoolOrDistrict"
					validators={{
						onChange: ({ value }) =>
							!value || value.length < 2
								? "Please enter at least 2 characters."
								: undefined,
						onChangeAsyncDebounceMs: 500,
						onChangeAsync: async ({ value }) => {
							if (value.length < 2) return;
							return checkDistrictExists(value);
						},
					}}
				>
					{(field) => (
						<div>
							<label htmlFor={field.name}>School or District</label>
							<input
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="e.g., Springfield Elementary"
							/>
							<FieldInfo field={field} />
						</div>
					)}
				</form.Field>

				<form.Field
					name="location"
					validators={{
						onChange: ({ value }) =>
							!value || value.length < 2
								? "Please enter a valid location."
								: undefined,
					}}
				>
					{(field) => (
						<div>
							<label htmlFor={field.name}>Location</label>
							<input
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="e.g., City, State, or ZIP Code"
							/>
							<FieldInfo field={field} />
						</div>
					)}
				</form.Field>
			</div>

			<div>
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<button type="submit" disabled={!canSubmit}>
							{isSubmitting ? "Searching..." : "Search"}
						</button>
					)}
				</form.Subscribe>
			</div>
		</form>
	);
}
