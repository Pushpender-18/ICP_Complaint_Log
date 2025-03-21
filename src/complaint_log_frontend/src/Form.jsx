import { complaint_log_backend } from 'declarations/complaint_log_backend';


function ComplainForm() {
	function handleSubmit(event) {
		event.preventDefault();

		const title = event.target.elements.title.value;
		const desc = event.target.elements.desc.value;
		event.target.elements.title.value = "";
		event.target.elements.desc.value = "";

		if ((title === "") || (desc === "")) {
			return;
		} else {
			complaint_log_backend.addComplaint(title, desc);
		}
	}

	return (<form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Title &nbsp;</label>
        <input id="title" alt="Title" type="text" />
        <label htmlFor="name">Description &nbsp;</label>
		<input id="desc" alt="Description" type="textbox" />
        <button type="submit">Submit</button>
    </form>);
}

export default ComplainForm;