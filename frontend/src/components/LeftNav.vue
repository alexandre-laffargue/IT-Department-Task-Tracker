<template>
	<aside class="left-nav" aria-label="Barre de navigation verticale">
		<nav class="nav-container">
			<ul class="nav-list">
				<li
					class="nav-item"
					:class="{ active: selected === 'Kanban' }"
					@click="select('Kanban')"
					@keydown.enter.prevent="select('Kanban')"
					@keydown.space.prevent="select('Kanban')"
					role="button"
					tabindex="0"
				>
					<span class="dot" aria-hidden="true"></span>
					<span class="label">Kanban</span>
				</li>

				<li
					class="nav-item"
					:class="{ active: selected === 'Backlog' }"
					@click="select('Backlog')"
					@keydown.enter.prevent="select('Backlog')"
					@keydown.space.prevent="select('Backlog')"
					role="button"
					tabindex="0"
				>
					<span class="dot" aria-hidden="true"></span>
						<span class="label">Backlog</span>
				</li>

				<li
					class="nav-item"
					:class="{ active: selected === 'Chronologie' }"
					@click="select('Chronologie')"
					@keydown.enter.prevent="select('Chronologie')"
					@keydown.space.prevent="select('Chronologie')"
					role="button"
					tabindex="0"
				>
					<span class="dot" aria-hidden="true"></span>
					<span class="label">Chronologie</span>
				</li>
			</ul>

			<div class="nav-bottom">
				<button class="login-btn" @click="onLogin">se connecter</button>
			</div>
		</nav>
	</aside>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const selected = ref('Kanban')

const routeToName = {
	'/kanban': 'Kanban',
	'/backlog': 'Backlog',
	'/chronologie': 'Chronologie'
}

const nameToRoute = {
	Kanban: '/kanban',
	Backlog: '/backlog',
	Chronologie: '/chronologie'
}

// initialize selected from current route
selected.value = routeToName[route.path] || 'Kanban'

// keep selection in sync when route changes externally
watch(
	() => route.path,
	(p) => {
		selected.value = routeToName[p] || selected.value
	}
)

function select(name) {
	selected.value = name
	const to = nameToRoute[name]
	if (to && route.path !== to) {
		router.push(to)
	}
}

function onLogin() {
	router.push('/login')
}
</script>

<style scoped>
.left-nav {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 220px;
	background: #8d598a; 
	color: #e6eef8;
	display: flex;
	align-items: stretch;
	box-shadow: 2px 0 8px rgba(2,6,23,0.4);
	z-index: 20;
}

.nav-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	padding: 24px 16px;
}

.nav-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.nav-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 12px;
	border-radius: 8px;
	cursor: pointer;
	color: #cfe3ff;
	transition: background 0.12s ease, box-shadow 0.12s ease, transform 0.06s ease;
}

.nav-item:hover,
.nav-item:focus {
	background: rgba(255, 255, 255, 0.03);
	outline: none;
}

.nav-item.active {
	background: linear-gradient(90deg, rgba(99,102,241,0.08), rgba(59,130,246,0.04));
	box-shadow: inset 3px 0 0 rgba(0, 0, 0, 0.9);
	transform: translateX(0);
}

.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #334155;
	flex-shrink: 0;
}

.nav-item.active .dot {
	background: #000000;
	box-shadow: 0 0 8px rgba(96,165,250,0.18);
}

.label {
	font-size: 14px;
	font-weight: 500;
	white-space: nowrap;
}

.nav-bottom {
	padding-top: 12px;
}

.login-btn {
	width: 100%;
	padding: 10px 12px;
	border-radius: 8px;
	background: #111827;
	color: #e6eef8;
	border: none;
	cursor: pointer;
	font-weight: 600;
	transition: background 0.12s ease, transform 0.06s ease;
}

.login-btn:hover {
	background: #0b1320;
	transform: translateY(-1px);
}

.login-btn:active {
	transform: translateY(0);
}

</style>