var optionalElement;

    if (this.props.condition) {
        optionalElement = (<div> … </div>);
    }

    return (
        <div>
            …
            {optionalElement}
            …
        </div>
    );