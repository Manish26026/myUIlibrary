My UI Library Documentation

Welcome to the documentation for My UI Library. This library provides a set of components and utilities for building interactive user interfaces. In this guide, we'll cover how to get started, install the library, and use its features.

Table of Contents

1. Installation
2. Basic Usage
3. Reactivity
4. Lifecycle Events
5. Customization
6. Examples

Installation

To use My UI Library in your project, you can install it via npm or yarn:

npm install my-ui-library
# OR
yarn add my-ui-library

Basic Usage

Import the Library

You can import components and functions from My UI Library as follows:

import { ComponentA, ComponentB, createReactiveComponent } from 'my-ui-library';

Render a Component

To render a component, create an instance and append it to the DOM:

const myComponent = new ComponentA();
myComponent.renderTo(document.getElementById('app'));

Reactivity

My UI Library supports reactivity to automatically update the UI when the component's state changes.

Create a Reactive Component

import { createReactiveComponent } from 'my-ui-library';

const initialState = { count: 0 };

function renderApp(state) {
  const container = document.getElementById('app');
  container.innerHTML = `Count: ${state.count}`;
}

const reactiveComponent = createReactiveComponent(initialState, renderApp);
reactiveComponent.renderTo(document.getElementById('app'));

Update the State

You can update the component's state to trigger a re-render:

reactiveComponent.setState({ count: 1 });

Lifecycle Events

My UI Library supports lifecycle events for components.

Mounting

You can execute custom logic when a component is mounted using the onMount function:

myComponent.onMount = () => {
  console.log('Component is mounted');
};

Customization

You can customize the appearance and behavior of components by passing options when creating an instance.

const myComponent = new ComponentA({ option1: 'value1', option2: 'value2' });

Examples

Simple Web App

Here's an example of how to create a simple web app using My UI Library:

import { createReactiveComponent } from 'my-ui-library';

const initialState = { count: 0 };

function renderApp(state) {
  const container = document.getElementById('app');
  container.innerHTML = `Count: ${state.count}`;
}

const reactiveComponent = createReactiveComponent(initialState, renderApp);
reactiveComponent.renderTo(document.getElementById('app'));

document.getElementById('increment-button').addEventListener('click', () => {
  reactiveComponent.setState({ count: reactiveComponent.state.count + 1 });
});
