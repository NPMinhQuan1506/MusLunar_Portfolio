package contact

// Message represents a contact submission in the domain layer.
type Message struct {
	Name    string
	Email   string
	Role    string
	Content string
	Consent bool
}
