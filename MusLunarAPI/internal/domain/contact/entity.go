package contact

// Message represents an inbound contact submission.
type Message struct {
	Name    string
	Email   string
	Role    string
	Content string
	Consent bool
}
